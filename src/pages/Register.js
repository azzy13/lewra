import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [department, setDepartment] = useState('');
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState('');

  return (
    <div className='register'>
      <h1 className='register__heading'>Registration form</h1>
      <form>
        <div>
          <label>Username</label>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Phone</label>
          <input
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label>Gender</label>
          <input
            type='radio'
            id='male'
            name='gender'
            value='male'
            onChange={(e) => setGender(e.target.value)}
          />
          <label for='male'>Male</label>
          <input
            type='radio'
            id='female'
            name='gender'
            value='female'
            onChange={(e) => setGender(e.target.value)}
          />
          <label for='female'>Female</label>
        </div>

        <div>
          <label>Date of Birth</label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value='CSE'>CSE</option>
            <option value='IT'>IT</option>
            <option value='ECE'>ECE</option>
            <option value='MECH'>MECH</option>
          </select>
        </div>

        <div>
          <label>Upload you tasveer</label>
          <input
            type='file'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <input type='submit' />
        <p class='message'>
          Already have an account?
          <Link to='/Login'> Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
