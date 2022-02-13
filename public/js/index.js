$(".boat-btn").click((e)=>{
  console.log("clicou")
  const boat_id =
            e.target.getAttribute('data-boat-id') ||
            e.target.parentElement.getAttribute('data-boat-id');
  console.log(boat_id)
  window.location = '/lancha/'+boat_id
})


$(".create_boat_action").click((e)=>{

  Swal.fire({
    title: 'Adicionar Lancha',
    width: 750,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: "Adicionar",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#d33",
    customClass: 'swal2-overflow',
    didOpen: (toast) => {
      console.log( $('#time'))
      $('#date').datepicker({});
      
    },
    html: `
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="departure">
              <option selected>Selecione o local de partida</option>
              <option value="1">Ilha</option>
              <option value="2">Salvador</option>
            </select>
            <br>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="destination">
              <option selected>Selecione o destino</option>
              <option value="1">Ilha</option>
              <option value="2">Salvador</option>
            </select>
            <br>
            <p>Data: <input type="text" id="date" name="date"></p>
            <p>Hora: <input type="time" id="time" name="time"></p>
            
                        `,
  }).then(async ({ value, isDismissed, isConfirmed, isDenied }) => {
    
    if (isConfirmed) {
      let date = $("#date").val()
      const time = $("#time").val()
      const departure = $("#departure").val()
      const destination = $("#destination").val()
      
      date = date.split('/')
      date = date[1]+'/'+date[0]+'/'+date[2]
      const res = await fetch('/lancha/create', {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date,
          time,
          departure,
          destination
        }),
      });
      if(res.status == 200){
        window.location.replace("/lancha/1");
      }
    }
  });
  
})

$(".history_boat_action").click((e)=>{
  window.location = '/lanchas/historico'
})


$(".room-btn").click((e)=>{
  console.log("clicou")
  const room_id =
            e.target.getAttribute('data-room-id') ||
            e.target.parentElement.getAttribute('data-room-id');
  console.log(room_id)
  window.location = '/quarto/'+room_id
})


