function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

async function hashFromString(string) {
  const hash = await SubtleCrypto.digest(
    "SHA-256",
    new TextEncoder().encode(string)
  );
  return "sha256-" + btoa(String.fromCharCode(...new Uint8Array(hash)));
}

const randomString = makeid(86);

hashFromString(randomString).then(console.log);
