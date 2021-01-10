import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import LazyLoad from 'react-lazyload'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneSquare, faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import classes from './About.module.css'

class About extends React.Component {
    componentDidMount() {
        document.title = 'Chilly | О нас'
    }

    render() {
        return (
            <section>
                <Container>
                    <Row>
                        <Col
                            xs={12} sm={6} md={6}
                            className={classes.wrapLogo}
                        >
                            <LazyLoad>
                                <img
                                    className={classes.logo}
                                    src="images/logo/logo-about.jpg"
                                    alt="logo-about"
                                />
                            </LazyLoad>
                        </Col>
                        <Col xs={12} sm={6} md={6} className={classes.wrapAbout}>
                            <p><strong>Chilly</strong> – это <i>Family busines</i>, в котором задействован каждый член семьи.</p>
                            <p><b>Доминика</b>  <i>1год 5мес</i> – стала идейным вдохновителем и толчком  для начала.</p>
                            <p><b>Марго</b> <i>10лет</i> – лицо бренда и базовая модель при конструировании изделий.</p>
                            <p><b>Александр</b> – отвечает за закупку и финансовую часть</p>
                            <p><b>Яна</b> – ловит вдохновение «за хвост» и просит конструктора это материализовать идею в реальность, а также отвечает за организационные вопросы и продажи.</p>
                            <p>Нам нравится быть «не как все» И мы уверенны, что у нас есть единомышленники.</p>
                        </Col>
                        <Col className={classes.wrapContact}>
                            <a href="tel:+380676358565">
                                <FontAwesomeIcon icon={faPhoneSquare} />
                                {' '}+38 (067) 635 85 65
                            </a>
                            <a href="mailto:kuzyana27@gmail.com">
                                <FontAwesomeIcon icon={faEnvelopeSquare} />
                                {' '}kuzyana27@gmail.com
                            </a>
                            <a href="https://www.instagram.com/chilly_dp/" target="_blank">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                                {' '}<span>@chilly_dp</span>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default About