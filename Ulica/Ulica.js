const colors = [ 0xFF0000, 0x00FF00, 0x0000FF, 0xFF6347, 0x228B22, 0x1E90FF, 0xDDDDDD ];
const colorsNumber = colors.length;
const sun_distance =600; 
let w = 0.008;
let running = true;

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1200 );
camera.position.z = 50;
camera.position.y = 100;
camera.lookAt( scene.position );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( new THREE.Color( 0xffffff ) )
document.getElementsByTagName('body')[0].appendChild( renderer.domElement );
const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

////////////////////////////platforma//////////////////
const geometry = new THREE.BoxGeometry( 290, 2, 810 );
const chodnik_texture = new THREE.TextureLoader().load( 'textures/chodnik.jpg' );
const material = new THREE.MeshStandardMaterial({ color: 0x808080, map:chodnik_texture} );
const geometry1 = new THREE.BoxGeometry( 50, 1, 810.10 );
const asfalt_texture = new THREE.TextureLoader().load( 'textures/asfalt.jpg' );
const material1 = new THREE.MeshStandardMaterial({ color: 0x595959, map:asfalt_texture} );
const podloga = new THREE.Mesh( geometry, material );
podloga.position.set( 0, 0, 0 );
const ulica = new THREE.Mesh( geometry1, material1 );
ulica.position.set( 0, 1, 0 );
///////////////////////////2 budynki//////////////////////
const geometry2 = new THREE.BoxGeometry( 60, 70, 270 );
const budynek_texture = new THREE.TextureLoader().load( 'textures/cegla.avif' );
const material2 = new THREE.MeshStandardMaterial({ color: 0x99CCCC, map:budynek_texture} );

const budynek_texture1 = new THREE.TextureLoader().load( 'textures/szara_cegla.jfif' );
const material3 = new THREE.MeshStandardMaterial({ color: 0x99CCCC, map:budynek_texture1} );

const budynek = new THREE.Mesh( geometry2, material2 );
budynek.position.set( -114, 35, 0 );
const budynek1 = new THREE.Mesh( geometry2, material3 );
budynek1.position.set( 114, 35, 0 );
///////////////////4budynki///////////////////////
const geometry4 = new THREE.BoxGeometry( 60, 80, 270 );
const budynek_texture2 = new THREE.TextureLoader().load( 'textures/z_szybami.jpg' );
const material6 = new THREE.MeshStandardMaterial({ color: 0x99CCCC, map:budynek_texture2} );
const budynek_texture3 = new THREE.TextureLoader().load( 'textures/stara_tekstura.jpg' );
const material7 = new THREE.MeshStandardMaterial({ color: 0x99CCCC, map:budynek_texture3} );
const budynek_texture4 = new THREE.TextureLoader().load( 'textures/tekstura_prl.jfif' );
const material8 = new THREE.MeshStandardMaterial({ color: 0x99CCCC, map:budynek_texture4} );
const budynek_texture5 = new THREE.TextureLoader().load( 'textures/tekstura_retro.jpg' );
const material9 = new THREE.MeshStandardMaterial({ color: 0x99CCCC, map:budynek_texture5} );
const budynek2 = new THREE.Mesh( geometry4, material6 );
budynek2.position.set( 114, 40, 270 );
const budynek3 = new THREE.Mesh( geometry4, material7);
budynek3.position.set( 114, 40, -270 );
const budynek4 = new THREE.Mesh( geometry4, material8 );
budynek4.position.set( -114, 40, 270 );
const budynek5 = new THREE.Mesh( geometry4, material9 );
budynek5.position.set( -114, 40, -270 );
////////////////////////dachy///////////////////
const roof_geometry = new THREE.PlaneGeometry( 64, 270 );
const roof_material = new THREE.MeshStandardMaterial( {color: 0xc8442d, side: THREE.DoubleSide} );
const roof = new THREE.Mesh( roof_geometry, roof_material );
roof.position.set(-112, 80.1, -270);
roof.rotation.x = (Math.PI)/2;
roof.receiveShadow = true;
roof.castShadow = true;
scene.add( roof );

const roof_material1 = new THREE.MeshStandardMaterial( {color: 0xc0b9be, side: THREE.DoubleSide} );
const roof1 = new THREE.Mesh( roof_geometry, roof_material1 );
roof1.position.set(-112, 80.1, 270);
roof1.rotation.x = (Math.PI)/2;
roof1.receiveShadow = true;
roof1.castShadow = true;
scene.add( roof1 );

const roof_material2 = new THREE.MeshStandardMaterial( {color: 0xcf673a, side: THREE.DoubleSide} );
const roof2 = new THREE.Mesh( roof_geometry, roof_material2 );
roof2.position.set(112, 80.1, -270);
roof2.rotation.x = (Math.PI)/2;
roof2.receiveShadow = true;
roof2.castShadow = true;
scene.add( roof2 );

//////////////////////////latarnie//////////////////
const geometry5 = new THREE.CapsuleGeometry( 1.5, 45, 1, 40 );
const material5 = new THREE.MeshStandardMaterial({ color: 0x606a85} );
const geometry6 = new THREE.CapsuleGeometry( 1.5, 11, 1, 40 );
const slup_latarni = new THREE.Mesh( geometry5, material5 );
slup_latarni.position.set( 67,23,0 );
const podwieszka_latarni = new THREE.Mesh( geometry6, material5 );
podwieszka_latarni.position.set( 61.5,45.5,0 );
podwieszka_latarni.rotation.z = (Math.PI)/2;
const slup_latarni1 = new THREE.Mesh( geometry5, material5 );
slup_latarni1.position.set( 67,23,220);
const podwieszka_latarni1 = new THREE.Mesh( geometry6, material5 );
podwieszka_latarni1.position.set( 61.5,45.5,220 );
podwieszka_latarni1.rotation.z = (Math.PI)/2;
const slup_latarni2 = new THREE.Mesh( geometry5, material5 );
slup_latarni2.position.set( 67,23,-220 );
const podwieszka_latarni2 = new THREE.Mesh( geometry6, material5 );
podwieszka_latarni2.position.set( 61.5,45.5,-220 );
podwieszka_latarni2.rotation.z = (Math.PI)/2;
const slup_latarni3 = new THREE.Mesh( geometry5, material5 );
slup_latarni3.position.set( -67,23,0 );
const podwieszka_latarni3 = new THREE.Mesh( geometry6, material5 );
podwieszka_latarni3.position.set( -61.5,45.5,0 );
podwieszka_latarni3.rotation.z = (Math.PI)/2;
const slup_latarni4 = new THREE.Mesh( geometry5, material5 );
slup_latarni4.position.set( -67,23,220);
const podwieszka_latarni4 = new THREE.Mesh( geometry6, material5 );
podwieszka_latarni4.position.set( -61.5,45.5,220 );
podwieszka_latarni4.rotation.z = (Math.PI)/2;
const slup_latarni5 = new THREE.Mesh( geometry5, material5 );
slup_latarni5.position.set( -67,23,-220 );
const podwieszka_latarni5 = new THREE.Mesh( geometry6, material5 );
podwieszka_latarni5.position.set( -61.5,45.5,-220 );
podwieszka_latarni5.rotation.z = (Math.PI)/2;
///////////////swiatla miejskie/////////////////////////////////////////
const light = new THREE.PointLight( 0xffffff, 2, 200, 1.3 );
light.position.set( 58,42,0 );
light.castShadow = true; // default false
scene.add( light );
const lampaGeometry = new THREE.SphereGeometry( 3, 32, 32 );
const lampaMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000, transparent:true, opacity:0.5 } );
const lampa = new THREE.Mesh( lampaGeometry, lampaMaterial );
lampa.position.set( 58,42,0 );
lampa.castShadow = false; //default is false
lampa.receiveShadow = true //default
scene.add( lampa );

const light1 = new THREE.PointLight( 0xffffff, 2, 200, 1.3 );
light1.position.set( -58,42,0 );
light1.castShadow = true; // default false
scene.add( light1);
const lampa1 = new THREE.Mesh( lampaGeometry, lampaMaterial );
lampa1.position.set( -58,42,0 );
lampa1.castShadow = false; //default is false
lampa1.receiveShadow = true //default
scene.add( lampa1 );

const light2 = new THREE.PointLight( 0xffffff, 2, 200, 1.3 );
light2.position.set( -58,42,220 );
light2.castShadow = true; // default false
scene.add( light2);
const lampa2 = new THREE.Mesh( lampaGeometry, lampaMaterial );
lampa2.position.set( -58,42,220 );
lampa2.castShadow = false; //default is false
lampa2.receiveShadow = true //default
scene.add( lampa2 );

const light3 = new THREE.PointLight( 0xffffff, 2, 200, 1.3 );
light3.position.set( -58,42,-220 );
light3.castShadow = true; // default false
scene.add( light3);
const lampa3 = new THREE.Mesh( lampaGeometry, lampaMaterial );
lampa3.position.set( -58,42,-220 );
lampa3.castShadow = false; //default is false
lampa3.receiveShadow = true //default
scene.add( lampa3 );

const light4 = new THREE.PointLight( 0xffffff, 2, 200, 1.3 );
light4.position.set( 58,42,-220 );
light4.castShadow = true; // default false
scene.add( light4);
const lampa4 = new THREE.Mesh( lampaGeometry, lampaMaterial );
lampa4.position.set( 58,42,-220 );
lampa4.castShadow = false; //default is false
lampa4.receiveShadow = true //default
scene.add( lampa4 );

const light5 = new THREE.PointLight( 0xffffff, 2, 200, 1.3 );
light5.position.set( 58,42,220 );
light5.castShadow = true; // default false
scene.add( light5);
const lampa5 = new THREE.Mesh( lampaGeometry, lampaMaterial );
lampa5.position.set( 58,42,220 );
lampa5.castShadow = false; //default is false
lampa5.receiveShadow = true //default
scene.add( lampa5 );
///////////////slonce/////////////////////////////////////////////////
const sun_geometry = new THREE.SphereGeometry( 30, 32, 16 );
const sun_texture = new THREE.TextureLoader().load( 'textures/sunmap.jpg' );
const sun_material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF,map:sun_texture } );
const sun = new THREE.Mesh( sun_geometry, sun_material );
sun.position.z = sun_distance;
scene.add( sun );
///////////zabawa ze swiatlem//////////////////////////
const sun_light = new THREE.SpotLight( 0x404040, 10, 1200, 0.8 );
sun_light.position.z = sun_distance; //default; light shining from top
sun_light.castShadow = true; // default false
scene.add( sun_light );

sun_light.shadow.mapSize.width = 810; // default
sun_light.shadow.mapSize.height = 512; // default
sun_light.shadow.camera.near = 0.5; // default
sun_light.shadow.camera.far = 500; // default

const sunshine = new THREE.AmbientLight( 0xa6a6a6 ); // soft white light
//scene.add( sunshine );
////////////warunki zeby mogły istnieć cienie/////////////////////////////

podloga.receiveShadow = true;
ulica.receiveShadow = true;
budynek.receiveShadow = true;
budynek1.receiveShadow = true;
budynek2.receiveShadow = true;
budynek3.receiveShadow = true;
budynek4.receiveShadow = true;
budynek5.receiveShadow = true;
slup_latarni.receiveShadow = true;
slup_latarni1.receiveShadow = true;
slup_latarni2.receiveShadow = true;
slup_latarni3.receiveShadow = true;
slup_latarni4.receiveShadow = true;
slup_latarni5.receiveShadow = true;
podwieszka_latarni.receiveShadow = true;
podwieszka_latarni1.receiveShadow = true;
podwieszka_latarni2.receiveShadow = true;
podwieszka_latarni3.receiveShadow = true;
podwieszka_latarni4.receiveShadow = true;
podwieszka_latarni5.receiveShadow = true;
podloga.castShadow = true;
ulica.castShadow = true;
budynek.castShadow = true;
budynek1.castShadow = true;
budynek2.castShadow = true;
budynek3.castShadow = true;
budynek4.castShadow = true;
budynek5.castShadow = true;
slup_latarni.castShadow = true;
slup_latarni1.castShadow = true;
slup_latarni2.castShadow = true;
slup_latarni3.castShadow = true;
slup_latarni4.castShadow = true;
slup_latarni5.castShadow = true;
podwieszka_latarni.castShadow = true;
podwieszka_latarni1.castShadow = true;
podwieszka_latarni2.castShadow = true;
podwieszka_latarni3.castShadow = true;
podwieszka_latarni4.castShadow = true;
podwieszka_latarni5.castShadow = true;
///////////////dodawanie obiektów do sceny
const group = new THREE.Group();
group.add( podloga );
group.add(ulica);
group.add(budynek);
group.add(budynek1);
group.add(budynek2);
group.add(budynek3);
group.add(budynek4);
group.add(budynek5);
group.add(slup_latarni);
group.add(podwieszka_latarni);
group.add(slup_latarni1);
group.add(podwieszka_latarni1);
group.add(slup_latarni2);
group.add(podwieszka_latarni2);
group.add(slup_latarni3);
group.add(podwieszka_latarni3);
group.add(slup_latarni4);
group.add(podwieszka_latarni4);
group.add(slup_latarni5);
group.add(podwieszka_latarni5);
scene.add(group);

renderer.render( scene, camera );
////rotacja słońca i światła i symulacja wschodu/zachodu słońca/////
function animate1() {
	requestAnimationFrame( animate1 );
	
	if(running == true)
	{
		sun.rotation.x -= w;
		sun.position.set( 0.0, sun_distance*Math.cos(sun.rotation.x)
		,sun_distance*Math.sin(sun.rotation.x));
	
		sun_light.rotation.x -= w;
		sun_light.position.set( 0.0, sun_distance*Math.cos(sun_light.rotation.x)
		,sun_distance*Math.sin(sun_light.rotation.x));
		if(sun.position.y > 100.0 )
		{
			scene.remove(light);
			scene.remove(light1);
			scene.remove(light2);
			scene.remove(light3);
			scene.remove(light4);
			scene.remove(light5);
			scene.add( sunshine );
			scene.background = new THREE.Color( 0x66b3ff );
		}
		if(sun.position.y < 100.0 && sun.position.y > 90.0 )
		{
			scene.background = new THREE.Color( 0x4da6ff );
		}
		if(sun.position.y < 90.0 && sun.position.y > 80.0 )
		{
			scene.background = new THREE.Color( 0x3399ff );
		}
		if(sun.position.y < 80.0 && sun.position.y > 70.0 )
		{
			scene.background = new THREE.Color( 0x1a8cff );
		}
		if(sun.position.y < 70.0 && sun.position.y > 60.0 )
		{
			scene.background = new THREE.Color( 0x0080ff );
		}
		if(sun.position.y < 60.0 && sun.position.y > 50.0 )
		{
			scene.background = new THREE.Color( 0x0073e6 );
		}
		if(sun.position.y < 50.0 && sun.position.y > 40.0 )
		{
			scene.background = new THREE.Color( 0x0066cc );
		}
		if(sun.position.y < 40.0 && sun.position.y > 30.0 )
		{
			scene.background = new THREE.Color( 0x0059b3 );
		}
		if(sun.position.y < 30.0 && sun.position.y > 20.0 )
		{
			scene.background = new THREE.Color( 0x004d99 );
		}
		if(sun.position.y < 20.0 && sun.position.y > 10.0 )
		{
			scene.background = new THREE.Color( 0x004080);
		}
		if(sun.position.y < 10.0 && sun.position.y > 0 )
		{
			scene.background = new THREE.Color( 0x003366 );
		}
		if(sun.position.y < 0 )
		{
			scene.add(light);
			scene.add(light1);
			scene.add(light2);
			scene.add(light3);
			scene.add(light4);
			scene.add(light5);
			scene.remove( sunshine );
			scene.background = new THREE.Color( 0x00264d );
		}
		}
	else if(running == false)
	{
		sun.rotation.x -= 0;
		sun_light.rotation.x -= 0;
	}
	
	
	renderer.render( scene, camera );
}

animate();
animate1();


const start_stopButton = document.getElementById('START_STOP')
const fastButton = document.getElementById('FASTER')
const slowButton = document.getElementById('SLOWER')

start_stopButton.addEventListener("click", start_stopAnimation);
fastButton.addEventListener("click", slowerAnimation);
slowButton.addEventListener("click", fasterAnimation);
function start_stopAnimation() 
{
	if(running == true)
	{
		running = false;
	}
	else if(running == false)
	{
		running = true;
	}
	requestAnimationFrame(animate);
}
function slowerAnimation() 
{
	w = w*1.1;
	requestAnimationFrame(animate);
}
function fasterAnimation() 
{
	w = w/1.1;
	requestAnimationFrame(animate);
}
////////////////
// aktualizacja OrbitControls.js
function animate() {
  requestAnimationFrame( animate );

	controls.update();
	renderer.render( scene, camera );
}
// zmiana rozmiaru okna
window.addEventListener(
  'resize',
  function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );
  },
  false
);

