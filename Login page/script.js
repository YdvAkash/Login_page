      
      function showForm(role) {
        document.getElementById('admin-form').style.display = 'none';
        document.getElementById('underwriter-form').style.display = 'none';
        if (role === 'admin') {
            document.getElementById('admin-form').style.display = 'block';
        } else if (role === 'underwriter') {
            document.getElementById('underwriter-form').style.display = 'block';
        }
    }