import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from '../apollo/queries/userQuery';
import { UPDATE_USER } from '../apollo/queries/userMutation';

interface UserFormData {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
}

const UserEditForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<UserFormData>();

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: 1 },
  });

  const [updateUser, { loading: mutationLoading, error: mutationError }] = useMutation(UPDATE_USER);

  useEffect(() => {
    if (data?.user) {
      reset({ 
        firstName: data.user.firstName,
        fatherName: data.user.fatherName,
        grandfatherName: data.user.fatherName,
        familyName: data.user.familyName
      });
    }
  }, [data, reset]);

  const onSubmit = (formData: UserFormData) => {
    console.log('Submitting Form Data:', formData);
    updateUser({
      variables: {
        firstName: formData.firstName,
        fatherName: formData.fatherName,
        grandfatherName: formData.fatherName,
        familyName: formData.familyName
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-8 bg-gray-600"
    >
      <h2 className="text-xl font-bold">Edit User Information</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          {...register('firstName')}
          className="border p-2 w-full"
        />
        <label>Fathar Name:</label>
        <input
          type="text"
          {...register('fatherName')}
          className="border p-2 w-full"
        />
        <label>GradFathar Name:</label>
        <input
          type="text"
          {...register('grandfatherName')}
          className="border p-2 w-full"
        />
         <label>Family Name:</label>
        <input
          type="text"
          {...register('familyName')}
          className="border p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className={`p-2 rounded ${
          mutationLoading ? 'bg-gray-500' : 'bg-blue-500'
        } text-white`}
        disabled={mutationLoading}
      >
        {mutationLoading ? 'Saving...' : 'Save'}
      </button>
      {mutationError && (
        <p className="text-red-500 mt-2">Error: {mutationError.message}</p>
      )}
    </form>
  );
};

export default UserEditForm;
