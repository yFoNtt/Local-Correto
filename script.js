document.addEventListener('DOMContentLoaded', function () {
    // Inicialize o mapa com as coordenadas de Curitiba
    var map = L.map('map').setView([-25.4284, -49.2733], 12);

    // puxa a API para funcionar o mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Pontos de coleta
    var pontosDeColeta = [
        { lat: -25.49094708441942, lng: -49.34553156627207, name: 'Ecoponto Caiuá', address: 'Av. Juscelino Kubitschek De Oliveira - Ld, 6800 - Cidade Industrial de Curitiba, Curitiba - PR, 81250-460' },
        { lat: -25.462795199789177, lng: -49.195271600000005, name: 'Ecoponto Cajuru', address: 'R. NEUSA VIEIRA BET, 255 ' },
        { lat: -25.58109823142935, lng: -49.32732329325441, name: 'Ecoponto Campo de Cantana', address: 'R. Teresa de Freitas Tavares, 331 - Campo de Santana, Curitiba - PR, 81020-490' },
        { lat: -25.51200782097116, lng: -49.33178967790931, name: 'Ecoponto CIC', address: 'R. Orestes Thá, 1765 - Cidade Industrial de Curitiba, Curitiba - PR, 81020-490' },
        { lat: -25.531980018890593, lng: -49.25125444907304, name: 'Ecoponto Érico Verissimo', address: 'R. Cap. Amin Mosse, 557 - Alto Boqueirão, Curitiba - PR, 81850-150' },
        { lat: -25.554689602225768, lng: -49.24455920024565, name: 'Ecoponto Jandaia', address: 'Rua Jornalista José Pedro dos Santos Pedrinho, 801 - Ganchinho, Curitiba - PR, 81935-430' },
        { lat: -25.442445458388672, lng: -49.29172159325441, name: 'Ecoponto Parque Gomm', address: 'R. Hermes Fontes, 204 - Batel, Curitiba - PR, 80440-070' },
        { lat: -25.5551953611302, lng: -49.324984419101966, name: 'Ecoponto Sambaqui', address: 'R. RAD. SOUZA MORENO, 30 - Tatuquara, Curitiba - PR, 81480-384' },
        { lat: -25.550021144217556, lng: -49.25447891534339, name: 'Ecoponto Guaçuí', address: 'R. MARIA AUGUSTA, 1' },
        { lat: -25.49137161868897, lng:-49.202897799999995, name: 'Ecoponto Icaraí', address: 'R. OLINDO CAETANI, 1330' },
        { lat: -25.42126672971128, lng:-49.363654528835845, name: 'Ecoponto Metropolitano', address: 'R. DA INDEPENDÊNCIA, 340' },
        { lat: -25.529267798841143, lng:-49.2305256, name: 'Ecoponto Vila Nova', address: 'R. TEN. CEL. VILAGRAN CABRITA, 2495' },
        { lat: -25.53041986277671, lng:-49.340937499999995, name: 'Ecoponto Vila Verde', address: 'R. LYDIO PAULO BETTEGA, 200' },
    ];
     
function mostraCaiua() {
    const caiua = document.querySelector("#caiua");
    caiua.showModal();
}

function mostraCajuru() {
    const cajuru = document.querySelector("#cajuru");
    cajuru.showModal();
}

function mostraCampoSantana() {
    const campoSantana = document.querySelector("#campoSantana");
    campoSantana.showModal();
}

function mostraCIC() {
    const CIC = document.querySelector("#CIC");
    CIC.showModal();
}

function mostraericoVerissimo() {
    const ericoVerissimo = document.querySelector("#ericoVerissimo");
    ericoVerissimo.showModal();
}

function mostraGuacui() {
    const guacui = document.querySelector("#guacui");
    guacui.showModal();
}

function mostraIcarai() {
    const icarai = document.querySelector("#icarai");
    icarai.showModal();
}


function mostraJandaia() {
    const jandaia = document.querySelector("#jandaia");
    jandaia.showModal();
}


function mostraMetropolitano() {
    const metropolitano = document.querySelector("#metropolitano");
    metropolitano.showModal();
}


function mostraGomm() {
    const gomm = document.querySelector("#gomm");
    gomm.showModal();
}


function mostraSambaqui() {
    const sambaqui = document.querySelector("#sambaqui");
    sambaqui.showModal();
}

function mostraVilaNova() {
    const vilaNova = document.querySelector("#vilaNova");
    vilaNova.showModal();
}

