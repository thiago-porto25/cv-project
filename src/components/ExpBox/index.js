/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Container, Input, Label, Textarea } from './styles/ExpBox'

export default function Box(props) {
  useEffect(() => {
    return () =>
      props.setData({
        company: '',
        position: '',
        description: '',
        start: '',
        end: '',
      })
  }, [])

  return (
    <Container>
      <div>
        <Label>Company:</Label>
        <Input
          type="text"
          maxLength="30"
          value={props.data.company}
          onChange={({ target }) =>
            props.setData({ ...props.data, company: target.value })
          }
          required
        />

        <Label>Position:</Label>
        <Input
          type="text"
          maxLength="30"
          value={props.data.position}
          onChange={({ target }) =>
            props.setData({ ...props.data, position: target.value })
          }
          required
        />

        <Label>Description:</Label>
        <Textarea
          type="text"
          maxLength="30"
          value={props.data.description}
          onChange={({ target }) =>
            props.setData({ ...props.data, description: target.value })
          }
          required
        />
      </div>
      <div>
        <Label>Start date:</Label>
        <Input
          type="date"
          value={props.data.start}
          onChange={({ target }) =>
            props.setData({ ...props.data, start: target.value })
          }
          required
        />

        <Label>End date:</Label>
        <Input
          type="date"
          value={props.data.end}
          onChange={({ target }) =>
            props.setData({ ...props.data, end: target.value })
          }
        />
      </div>
    </Container>
  )
}
