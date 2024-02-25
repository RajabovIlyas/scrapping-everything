'use client';

import { FC } from 'react';
import { FieldErrors, UseFieldArrayReturn, UseFormRegister } from 'react-hook-form';
import { ParseFormModel } from '@/models/parse-form.model';

interface FormFieldsProps {
  formFields: UseFieldArrayReturn<ParseFormModel, 'fields', 'id'>,
  register: UseFormRegister<ParseFormModel>,
  errors: FieldErrors<ParseFormModel>
}

const FormFields: FC<FormFieldsProps> = ({ formFields, register, errors }) => {
  const { fields, prepend, remove, swap, move, insert } = formFields;

  return (
    <>
      {
        fields.map((field, index) => (
          <div key={field.id}>
            <div className='flex justify-between'>
              <h2 className='main-title text-2xl text-start text-cyan-700'>Setting property</h2>
              <button type='button' onClick={() => remove(index)}
                      className=''>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
                     stroke='currentColor' className='w-4 h-4 hover:stroke-zinc-500'>
                  <path strokeLinecap='round' strokeLinejoin='round'
                        d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0' />
                </svg>
              </button>
            </div>
            <div className='md:flex gap-3 justify-between mt-3'>
              <div className='lg:flex justify-between w-full gap-3'>
                <div className='w-full'>
                  <label htmlFor='propertyName'
                         className='form-label text-sky-700'>
                    Property Name
                  </label>
                  <input {...register(`fields.${index}.propertyName`)} className='form-input border-sky-700' />
                  <p className='form-wrong'>{errors?.fields?.[index]?.propertyName?.message}</p>
                </div>
                <div className='w-full'>
                  <label htmlFor='searchQuery'
                         className='form-label text-blue-700'>
                    Search Query
                  </label>
                  <input {...register(`fields.${index}.searchQuery`)} className='form-input border-blue-700' />
                  <p className='form-wrong'>{errors?.fields?.[index]?.searchQuery?.message}</p>
                </div>
              </div>
              <div className='lg:flex justify-between w-full gap-3 '>
                <div className='w-full'>
                  <label htmlFor='attribute'
                         className='form-label text-indigo-700'>
                    Attribute
                  </label>
                  <input {...register(`fields.${index}.attribute`)} className='form-input border-indigo-700' />
                  <p className='form-wrong'>{errors?.fields?.[index]?.attribute?.message}</p>
                </div>
                <div className='w-full'>
                  <label htmlFor='url'
                         className='form-label text-violet-700'>
                    Property type
                  </label>
                  <input {...register(`fields.${index}.propertyType`)} className='form-input border-violet-700' />
                  <p className='form-wrong'>{errors?.fields?.[index]?.propertyType?.message}</p>
                </div>
              </div>
            </div>
            {fields.length - 1 !== index && <div className='w-full h-[1px] bg-zinc-100 rounded' />}
          </div>
        ))
      }
    </>
  );
};

export default FormFields;
