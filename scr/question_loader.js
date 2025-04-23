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
        allContainers.forEach((el) => {
          if (el !== container) el.classList.remove('active');
        });

        container.classList.toggle('active');
      });

      container.appendChild(header);
      container.appendChild(content);
      root.appendChild(container);
    });
  }

  const data = [
    ['Lorem ipsum dolor sit amet consectetur adipisicing elit?', 
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.</p>`
    ],
    ['Lorem ipsum dolor sit amet consectetur adipisicing elit?', 
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.</p>`
    ],
    ['Lorem ipsum dolor sit amet consectetur adipisicing elit?', 
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste deserunt commodi impedit omnis. Obcaecati facere exercitationem et veniam dolorum omnis amet illo unde pariatur maxime qui id, modi dolorem velit suscipit excepturi voluptates voluptatum expedita ea necessitatibus ipsam quia architecto! Quam deserunt ducimus totam cum laudantium praesentium quidem cumque.</p>`
    ]
  ];

  createDropdowns(data);