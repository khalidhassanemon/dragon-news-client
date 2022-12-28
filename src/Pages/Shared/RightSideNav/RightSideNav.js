import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaWhatsapp,FaTwitch,FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const RightSideNav = () => {

     const {providerLogin}=useContext(AuthContext);

     const googleProvider=new GoogleAuthProvider();

    const handleSubmit=()=>{
           providerLogin(googleProvider)
           .then(result=>{
            const user=result.user;
            console.log(user);
           })
           .catch(error=>console.log("Error",error));
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant='outline-primary' onClick={handleSubmit}><FaGoogle></FaGoogle>Log In With Google</Button>
                <Button variant='outline-dark'><FaGithub></FaGithub>Log In With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>What's app</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube>Youtube</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div >
    );
};

export default RightSideNav;