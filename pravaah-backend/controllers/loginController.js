exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    console.log('Login request:', email, password);
    // For now just echo back
    res.json({ message: 'Login successful!', user: email });
  };
  