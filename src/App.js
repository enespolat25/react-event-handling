import "./App.css";

//onClick, onChange, onSubmit, onFocus, onBlur, preventDefault, stopPropagation

function App() {
  return (
    <div
    onClick={() => {
      //1 ilgili alana tıklandığında
        console.log("App divine tıklandi.");
      }}
      
      className="App"
    >
      <h1>React Dersleri</h1>
      <form
        onSubmit={(e) => {
          //3 Enter e basınca
          e.preventDefault();//6 Varsayılanda anında işleme alırken preventDefaultta bekliyor
          console.log("Form kaydedildi");
        }}
      >
        Isim:
        <input
          name="isim"
          onClick={(e)=>{
            e.stopPropagation();//7 aslında bir üst alanda tıklı sadece ilgili alan için bu işlemi yap
            console.log("Input Tıklandı.");
          }}
          onFocus={() => {
            //4 Alanın içine tıklandığında
            console.log("İmleç inputun içinde");
          }}
          onBlur={(e)=>{
            //5 alanın dışı tıklandığında
            const name=e.target.value;
            if(name.length<8){
              alert("Şifre en az 8 karakter olmalıdır.");
            }
            
          }}
          onChange={(e) => {
            //2 değer değiştiğinde
            console.log("Bişey yazıldı.",
             e.target.name, 
             e.target.value);
          }}
          name="isim"
        />
      </form>
    </div>
  );
}

export default App;
