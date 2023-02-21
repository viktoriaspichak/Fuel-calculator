function fuel () {
    let distance = document.getElementById('trip').value;
    let consumption = document.getElementById('consumption').value;
    let result = ((distance * consumption) / 100);
    document.getElementById('amount').value = result;
}
  document.getElementById('calculate').onclick = fuel