

// Open and closes Nav Bar on mobile devices.
function openNav(){
  document.getElementById('links').style.height = '125px';
  document.getElementById('exit').style.display = 'inline';
  document.getElementById('header').style.display = 'none';
  console.log('open');
}

function closeNav(){
  document.getElementById('links').style.height = '0px';
  document.getElementById('exit').style.display = 'none';
  document.getElementById('header').style.display = 'inline';
  console.log('closed');
}
