fetch("../pages/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });


        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const btn = document.querySelector('.category-btn span');
                btn.textContent = this.textContent;
            });
        });
    
