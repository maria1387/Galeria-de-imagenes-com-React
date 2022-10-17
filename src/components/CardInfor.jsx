import Card from 'react-bootstrap/Card'
import Title from './Title';
import cat from '../img/cat.jpg'
import flor from '../img/flor1.jpg'
import mariposa from '../img/mariposa.jpg'
import plum from '../img/plum.jpg'

const CardInfor = () => {
	return (
		<>
      <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={flor} />
        <Card.Body>
          <Title title2={'Flor 2'}/>
        
          <Title text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, asperiores.'}/>
        </Card.Body>
      </Card>
      <br />

      <Card border="secondary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mariposa} />
        <Card.Body>
        <Title title2={'Mariposa'}/>
        <Title text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione eligendi expedita?'}/>
        </Card.Body>
      </Card>
      <br />

      <Card border="success" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cat} />
        <Card.Body>
        <Title title2={'Gatito'} />
        <Title text={'Some quick example text to build on the card title and make up the bulk of the card'}/>
        </Card.Body>
      </Card>
      <br />

      <Card border="danger" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={plum} />
        <Card.Body>
        <Title title2={'Flor'}/>
        <Title text={'Some quick example text to build on the card title and make up the bulk of the card'}/>
        </Card.Body>
      </Card>
      <br />

      
      <br />

      
  
    </>
	)
};

export default CardInfor;
