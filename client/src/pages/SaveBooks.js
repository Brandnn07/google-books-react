import React, { useState, useEffect, Component} from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


class SavedBooks extends Component {
    state = {
        SavedBooks: []
    }
    
    componentDidMount() {
        API.saveBook()
        .then(savedBooks => this.setState({ SavedBooks: savedBooks }))
        .catch(err => console.error(err))
    }

    render() {
        return (
            <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>Saved</h1>
                </Jumbotron>
              </Col>
              <Col size="md-6 sm-12">
                {this.state.SavedBooks ? (
                  <List>
                    {this.state.SavedBooks.map(book => (
                      <ListItem key={book._id}>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </Container>
        );
      }
    }


export default SavedBooks;