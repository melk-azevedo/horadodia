function carregar() {
    const msg = document.getElementById("msg")
    const img = document.getElementById("imagem")
    const data = new Date()
    const hora = String(data.getHours()).padStart(2, "0")
    const minuto = String(data.getMinutes()).padStart(2, "0")
    msg.innerHTML = `Agora são: <strong>${hora}:${minuto}<strong/>.`
   
    if (hora >= 0 && hora < 12) {
        img.src = "imagens/imgmanha.png"
        msg.innerHTML = `Bom dia! agora são: <strong>${hora}:${minuto}<strong/>.`
        document.body.style.background = "#e2cd3f"
    } else if (hora >= 12 && hora <= 18) {
        img.src = "imagens/imgtarde.png"
        msg.innerHTML = `Boa tarde! agora são: <strong>${hora}:${minuto}<strong/>.`
        document.body.style.background = "#b9945f"
    } else {
        img.src = "imagens/imgnoite.png"
        msg.innerHTML = `Boa noite! agora são: <strong>${hora}:${minuto}<strong/>.`
        document.body.style.background = "#515154"
    }
}
