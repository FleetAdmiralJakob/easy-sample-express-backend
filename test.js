const registerUser = async () => {
    const email = 'hallo@gamiusistsehrcool.com';
    const password = 'geheim123';
  
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('User registered:', responseData);
      } else {
        console.error('Error registering user:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
registerUser();