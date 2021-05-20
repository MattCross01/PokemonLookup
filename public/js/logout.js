const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
<<<<<<< HEAD
  document.querySelector('#logout').addEventListener('click', logout);
=======
  document.querySelector('#logout').addEventListener('click', logout);
  
>>>>>>> 3d9789527a11e34c36b6afbb357617490bd15c2f
