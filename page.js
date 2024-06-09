

        document.getElementById('formulaire ').addEventListener('submit', function(event) {
            const titre= document.getElementById('titre');
            const  phone= document.getElementById('phone');
            
            

            if (!titre.checkValidity()) {
                event.preventDefault();
                alert(titre.title);
            }

            if (!phone.checkValidity()) {
                event.preventDefault();
                alert(phone.title);
            }

    
        

         
            
        });
    