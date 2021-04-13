setTimeout(() => {
    console.log("ZZZZZZ handling");
    const ifr = document.getElementById("testiframe");
    console.log("ZZZZZ iframe", ifr);
    console.log("ZZZZZ iframe window", ifr.contentWindow);
    console.log("ZZZZ iframe element", ifr.contentWindow.document.getElementById("ZIGGY"));
    console.log("ZZZZ iframe element content", ifr.contentWindow.document.getElementById("ZIGGY").innerText);
}, 2000)
