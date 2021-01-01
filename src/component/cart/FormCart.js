import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import classes from './FormCart.module.css'

export default function FormCart(props) {
    return (
        <Form className={classes.formSubmit} onSubmit={props.onSubmit}>
            <Form.Group controlId="name">
                <Form.Control
                    isInvalid={props.formControl.name.isInvalid}
                    isValid={props.formControl.name.isValid}
                    type="text"
                    name="name"
                    placeholder="Введите имя"
                    value={props.formControl.name.value}
                    onChange={event => props.onChange(event, props.formControl)}
                />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Control
                    isInvalid={props.formControl.email.isInvalid}
                    isValid={props.formControl.email.isValid}
                    type="email"
                    name="email"
                    placeholder="Введите email"
                    value={props.formControl.email.value}
                    onChange={event => props.onChange(event, props.formControl)}
                />
            </Form.Group>

            <Form.Group controlId="phone">
                <Form.Control
                    isInvalid={props.formControl.phone.isInvalid}
                    isValid={props.formControl.phone.isValid}
                    type="text"
                    name="phone"
                    placeholder="Номер телефона в формате 380ХХХХХХХХХ"
                    value={props.formControl.phone.value}
                    onChange={event => props.onChange(event, props.formControl)}
                />
            </Form.Group>

            <Form.Group controlId="textarea">
                <Form.Control
                    onChange={event => props.onChange(event, props.formControl)}
                    name="message"
                    value={props.formControl.message.value}
                    as="textarea"
                    rows={3}
                />
            </Form.Group>

            <Button
                type="submit"
                variant="warning"
                disabled={!props.orderValid()}
            >
                Заказать
            </Button>
        </Form>
    );
}