import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from './components/Input';

function Component(props: any) {
  return <div>{props.name}</div>;
}

let data = () => ({
  name: 'Nika',
  as: 'Nika',
  nasdasame: 'Nika',
  asd: 'Nika',
  nasdame: 'Nika',
  asdasd: 'Nika',
  as234d: 'Nika',
});

type Inputs = {
  name: string;
  surname: string;
  email: string;
};

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  console.log('Errors: ', errors);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="surname" {...register('surname')} />

        <input
          placeholder="name"
          {...register('name', {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'მხოლოდ ასოები ფლიიიზ',
            },
            maxLength: 5
          })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

        <Input
          color="red"
          placeholder="email"
          {...register('email', {
            required: 'აუცილებლად ჩასაწერი!',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'მეილი არავალიდურია!',
            },
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <button type="submit">Register</button>
      </form>

      {/* <Component {...data()} /> */}
    </div>
  );
}

export default App;
