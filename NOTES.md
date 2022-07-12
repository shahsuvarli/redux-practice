State Management with Redux

Global State-leri Componentde bir nece usul ile getire bilerik

1. connect:

   1. connect hocunu componentin adinin qabagina getiririk
   2. mapStateToProps funksiyasi yazib return state edirik
   3. componente gelen propsdan state deyishenlerini gotururuk
   4. bu zaman hem parentden gelen props, hem de connect-den gelen state propsun icerisinde olur

2. useSelector():

   1. bu hook-dan istifade etmekle useSelector(state=>state) yazaraq qayidan deyeri deyishene menimsedib istifade edirik.
   2. bu hook-dan istifade ederek hemcinin reducerde hazir qalmish funksiyanin neticesinin deyerini de istifade etmek olar

Global Statein deyerini componentin icerisinden deyishmek ucun bir nece usul

1. useDispatch()-den gelen deyeri dispatch deyishenine assign edib onClick-in icerisinde istifade edirik dispatch({type:'ARTIR', payload:10})
2. connect hoc-nu componentin qabagina yazaraq onClick-in icerisinde props.dispatch(...) istifade ederek
