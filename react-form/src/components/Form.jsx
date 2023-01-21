import React,{useState} from 'react'






const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });

      const [errors, setErrors] = useState({});
      
      const validate = () => {
        const newErrors = {};
        if (!formData.name) {
          newErrors.name = 'Name is required';
        }
        if (!formData.email) {
          newErrors.email = 'Email is required';
        }
        if (!formData.password) {
          newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({});
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          console.log('Form is valid');
          // make API call or do something with form data
        } else {
          console.log('Form is invalid');
        }
      };
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button type="submit">Submit</button>
          </form>

      )

    
}

export default Form


