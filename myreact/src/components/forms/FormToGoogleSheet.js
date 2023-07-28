function FormToGoogleSheet(){

    
        function Submit(e) {
          const formEle = document.querySelector("form");
          const formDatab = new FormData(formEle);
          fetch(
            "https://script.google.com/macros/s/AKfycbwACpEMQudrt9lMyr8ZpQ1Wzom4fUu2m02OrSZl8-Af9vpUn3_XC1qO3NPY14-R7s86/exec",
            {
              method: "POST",
              body: formDatab
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
        return (
          <div className="App">
            <h1>Contact Me form</h1>
            <h2>
              This demonstrates how to send data from a website form to Google sheet
              in React or Vanilla jS
            </h2>
            <div>
              <form className="form" onSubmit={(e) => Submit(e)}>
                <input placeholder="Your Name" name="Name" type="text" />
                <input placeholder="Your Email" name="Email" type="text" />
                <input placeholder="Your Message" name="Message" type="text" />
                <input name="Name" type="submit" />
              </form>
            </div>
          </div>
        );
      
}

export default FormToGoogleSheet;