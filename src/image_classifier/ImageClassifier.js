import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col, Image, Form, Dropdown, Button } from 'react-bootstrap';

const BASE_URL = 'https://luizotavioapi.herokuapp.com/';
//const BASE_URL = 'http://localhost:5000/';

import './ImageClassifier.css';
import './bootstrap.min.css';

class ImageClassifier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            message: '',
            method: "color",
            isLoading: false,
            classified_imgs: [],
        }
    }
    selectImages = (event) => {
        let images = [];
        for (let i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files.item(i);
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/));
        let message = `${images.length} valid image(s) selected`;
        this.setState({ images, message });
    };

    uploadImages = () => {
        this.setState({ isLoading: true });
        const uploaders = this.state.images.map(image => {
            const data = new FormData();
            data.append("image", image, image.name);
            this.setState({ message : "Uploading images and running classifier..." });
            // Make an AJAX upload request using Axios
            return axios.post(BASE_URL + 'upload?method=' + this.state.method, data)
                .then(response => {
                    if(response.data != null){
                        this.setState({ classified_imgs: [ response.data, ...this.state.classified_imgs ] });
                    }
                    this.setState({ message : "Success!" });
                    this.setState({ isLoading: false });
                }, 	(error) => {
                    this.setState({ message : "Error! " + error });
                    this.setState({ isLoading: false });
                })
        });

        // Once all the files are uploaded
        axios.all(uploaders).then(() => {
        }).catch(err => {
            this.setState({ message : "Error! " + err.message });
            alert(err.message)}
        );
    };
    render() {
        return (
            <Container className="ImageClassifier-container">
                <div className="title-container">
                    <h1>Python Image Classifier</h1><hr/>
                    <div><a href="https://github.com/ronaldpereira">Ronald Pereira</a> (ronald.drp11@gmail.com)</div>
                    <div><a href="https://github.com/Lothav">Luiz Otavio</a> (me@luizotav.io)</div>
                </div>
                <hr/>
                <Row>
                    <Col xs={6}>
                        <Form.Control type="file" onChange={this.selectImages} multiple />
                        <span className="text-info">{this.state.message}</span>
                    </Col>
                    <Col xs={3}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Use '{this.state.method}' method
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onSelect={() => this.setState({method : "color"})}>Use 'color' method</Dropdown.Item>
                                <Dropdown.Item onSelect={() => this.setState({method : "lbp"})}>Use 'lbp' method</Dropdown.Item>
                                <Dropdown.Item onSelect={() => this.setState({method : "glcm"})}>Use 'glcm' method</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={3}>
                        <Button
                            variant="secondary" value="Submit"
                            disabled={this.state.isLoading}

                            onClick={!this.state.isLoading ? this.uploadImages : null}
                        >
                            {this.state.isLoading ? 'Loading…' : 'Submit'}
                        </Button>
                    </Col>
                </Row>
                {
                    this.state.classified_imgs.map((data, i) => {
                        return ((i + 1) % 2 === 0 ?
                                (<Row className="align-items-center" key={i}>
                                    <Col xs={12} sm={6} lg={3} className="col-classified">
                                        <Image className="classified-img" src={BASE_URL + this.state.classified_imgs[i - 1].imageUrl} rounded />
                                    </Col>
                                    <Col xs={12} sm={6} lg={3} className="col-classified">
                                        <span>{this.state.classified_imgs[i - 1].classification}</span>
                                    </Col>
                                    <Col xs={12} sm={6} lg={3} className="col-classified">
                                        <Image className="classified-img" src={BASE_URL + this.state.classified_imgs[i].imageUrl} rounded />
                                    </Col>
                                    <Col xs={12} sm={6} lg={3} className="col-classified">
                                        <span>{this.state.classified_imgs[i].classification}</span>
                                    </Col>
                                </Row>) : ((i + 1) === this.state.classified_imgs.length ?
                                    (<Row className="align-items-center" key={i}>
                                        <Col xs={12} sm={6} lg={3} className="col-classified">
                                            <Image className="classified-img" src={BASE_URL + this.state.classified_imgs[i].imageUrl} rounded />
                                        </Col>
                                        <Col xs={12} sm={6} lg={3} className="col-classified">
                                            <span>{this.state.classified_imgs[i].classification}</span>
                                        </Col>
                                    </Row>) : "")
                        )
                    })
                }
            </Container>
        );
    }
}
export default ImageClassifier;