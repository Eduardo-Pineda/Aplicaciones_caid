function createDropdowns(data) {
    const root = document.getElementById('dropdowns-root');
    root.innerHTML = ''; // Limpiar si hay contenido previo

    data.forEach(([title, body], index) => {
      const container = document.createElement('div');
      container.className = 'dropdown-container';

      const header = document.createElement('div');
      header.className = 'dropdown-title';
      header.textContent = title;

      const content = document.createElement('div');
      content.className = 'dropdown-body';
      content.innerHTML = body;

      header.addEventListener('click', () => {
        const allContainers = root.querySelectorAll('.dropdown-container');

        [...document.querySelectorAll(".dropdown-container")].map(el => el.children[0].classList.remove('dropdown-title--borderRadiusFix'));

        allContainers.forEach((el) => {
          if (el !== container) {
            el.classList.remove('active');
            header.classList.remove('dropdown-title--borderRadiusFix');
          }
        });

        container.classList.toggle('active');
        
        if(container.classList.contains('active')){
          header.classList.add('dropdown-title--borderRadiusFix');
        }
       
      });

      container.appendChild(header);
      container.appendChild(content);
      root.appendChild(container);
    });
  }

  createDropdowns([
    [
      'Me sale una pagina de error al acceder a una pagina del CAID',
      `
        <p>Si accedes a una pagina oficial del CAID y te sale un error diciendo: "Tu conexion es privada" o "Your connection is not private", significa que existe un error de certificado entre el navegador y el servidor. Esto ocurre generalmente porque la hora del ordenador y el servidor no son la misma. Para saltar este error y acceder al servicio deseado siga los siguientes pasos:</p>
        <br></br>

        <ol>
          <li>
            <p>Dar click al boton "avanzado" o "Advanced".</p>
            <img src="./assets/c780f4b4-8ae3-4203-ad87-6234f13964bf.jpg"></img>
          </li>
          <li>
            <p>Luego dar click a "proceder con" o "proceed to" para acceder al servicio.</p>
            <img src="./assets/cc205286-dc2a-49e2-846f-898cda8dee4d.jpg"></img>
          </li>
          <li>
            <p>¡Y listo! Ya estamos dentro del servicio deseado.</p>
            <img src="./assets/7668d203-4c95-4644-b1ca-0de5af4972a3.jpg"></img>
          </li>
        </ol>
      
      `
    ]
  ]);