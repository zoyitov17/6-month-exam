document.getElementById('login-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
          throw new Error('Login yoki parol noto\'g\'ri');
      }

      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      window.location.href = 'admin.html';
  } catch (error) {
      alert(error.message);
  }
});
