/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Container, Input, Label, Textarea } from './styles/ExpBox'

export default function Box(props) {
  useEffect(() => {
    return () => {
      props.setCount(0)
      props.setInfo({
        company: '',
        position: '',
        description: '',
        start: '',
        end: '',
      })
    }
  }, [])

  return (
    <Container>
      <div>
        <Label>Company:</Label>
        <Input
          type="text"
          maxLength="30"
          value={props.info.company}
          onChange={({ target }) =>
            props.setInfo({ ...props.info, company: target.value })
          }
          required
        />

        <Label>Position:</Label>
        <Input
          type="text"
          maxLength="30"
          value={props.info.position}
          onChange={({ target }) =>
            props.setInfo({ ...props.info, position: target.value })
          }
          required
        />

        <Label>Description:</Label>
        <Textarea
          type="text"
          maxLength="30"
          value={props.info.description}
          onChange={({ target }) =>
            props.setInfo({ ...props.info, description: target.value })
          }
          required
        />
      </div>
      <div>
        <Label>Start date:</Label>
        <Input
          type="date"
          value={props.info.start}
          onChange={({ target }) =>
            props.setInfo({ ...props.info, start: target.value })
          }
          required
        />

        <Label>End date:</Label>
        <Input
          type="date"
          value={props.info.end}
          onChange={({ target }) =>
            props.setInfo({ ...props.info, end: target.value })
          }
        />
      </div>
    </Container>
  )
}
