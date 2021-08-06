/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Container, Input, Label } from './styles/EducBox'

export default function Box(props) {
  useEffect(() => {
    return () =>
      props.setData({ institution: '', degree: '', start: '', end: '' })
  }, [])

  return (
    <Container>
      <div>
        <Label>Institution:</Label>
        <Input
          type="text"
          maxLength="30"
          value={props.data.institution}
          onChange={({ target }) =>
            props.setData({ ...props.data, institution: target.value })
          }
          required
        />

        <Label>Degree:</Label>
        <Input
          type="text"
          maxLength="30"
          value={props.data.degree}
          onChange={({ target }) =>
            props.setData({ ...props.data, degree: target.value })
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
