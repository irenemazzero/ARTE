document.addEventListener('DOMContentLoaded', initPage, false);

function initPage() {
  loadHeader();
  loadFooter();
  var url = document.location.pathname;
  if(url.split("/")[url.split("/").length-1] == "pittura.html") {
    filtraPerMovimento();
  }
}

var slideTab = [1, 1];
var slideId = []
var slides = document.getElementsByClassName("carosello");
for (var i = 1; i <= slides.length; i++) {
  slideId.push("slide" + i);
}

creaSlide(1, 0);
cambiaSlide(1, 1);

function cambiaSlide(n, no) {
  creaSlide(slideTab[no] += n, no);
}

function creaSlide(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideTab[no] = 1
  }
  if (n < 1) {
    slideTab[no] = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideTab[no] - 1].style.display = "block";
}

function loadHeader() {
  var url = document.location.pathname;
  var nomePagina = "";
  nomePagina = url.split("/")[url.split("/").length-1] ;

  var headerHTML = ` <div class='barra container'>
                          <ul>
                            <li class='logo'><a href='home.html'><img src='images/logo_header.jpg' alt='logo_definitivo.png' /></a></li>
                            <li><a href="movimenti.html" class="${nomePagina=='movimenti.html' ? 'active' : ''}">Pittura</a></li>
                            <li><a href="scultura.html" class="${nomePagina=='scultura.html' ? 'active' : ''}">Scultura</a></li>
                            <li><a href='musei.html' class="${nomePagina=='musei.html' ? 'active' : ''}">Musei</a></li>
                          </ul>
                        </div>`;

  var headerRaw = document.getElementsByClassName("header");
  if (headerRaw != null && headerRaw.length > 0) {
    var header = headerRaw.item(0);
    header.innerHTML = headerHTML;
  }
}
function loadFooter() {
  var footerHTML = `<ul>
                      <li>Creato da</li>
                      <li><address><a href="mailto:mazzero.st.irene@maxplanck.edu.it"><span class="material-symbols-outlined">
                      mail
                      </span>Irene Mazzero</a></address></li>
                    </ul>
                    <div>Tutti i contenuti sono prottetti dalla licenza creative commons</div>`

  var footerRaw = document.getElementsByClassName("footer");
  if (footerRaw != null && footerRaw.length > 0) {
    var footer = footerRaw.item(0);
    footer.innerHTML = footerHTML;
  }
}

function changeImage(elemento) {
  if (elemento.classList.contains("active") == true) {
    elemento.classList.remove("active");
  }
  else {
    elemento.classList.add("active");
  }
}

function filtraPerMovimento(){
  var parametri = document.location.search;
  var movimentoSelezionatoRaw = parametri.split("&")[0];
  var movimentoSeleziona = movimentoSelezionatoRaw.replace("?movimento=", "");
  //console.log(movimentoSeleziona);

  var items = document.getElementsByClassName("item");
  var descrizioni = document.getElementsByClassName("descrizione");
  
  for(var i=0; i < items.length; i++ ){
    var item = items[i];
    item.classList.remove("visibile");
    if(item.classList.contains(movimentoSeleziona) == true) {
      item.classList.add("visibile");
    }
  };
  
  for(var j=0; j < descrizioni.length; j++ ){
    var descrizione = descrizioni[j];
    descrizione.classList.remove("visibile");
    if(descrizione.classList.contains(movimentoSeleziona) == true) {
      descrizione.classList.add("visibile");
    }
  }
} 