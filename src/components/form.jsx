/** @jsx jsx */
import { jsx, Input } from 'theme-ui';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, watch, errors } = useForm();

  async function onSubmit(data) {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">
          <span>First Name</span>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            ref={register({ required: true })}
            className={errors.name ? 'has-errors' : null}
          />
          {errors.name && <p>Please enter your first name</p>}
        </label>
      </div>
      <div>
          <label htmlFor="email">
            <span sx={{ variant: 'layout.visuallyHidden' }}>Email Address</span>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              ref={register({
                required: 'Please enter your email address',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]+$/,
                  message: 'Entered value does not match email format',
                },
              })}
              className={errors.email ? 'has-errors' : null}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
        </div>
      <div sx={{ position: 'relative', cursor: 'pointer' }}>
        <Input sx={{ cursor: 'pointer' }}
          type="submit"
          value="Send"
        />
      </div>
    </form>
  );

};
