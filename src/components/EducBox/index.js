/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Container, Input, Label } from './styles/EducBox'

export default function Box(props) {
  useEffect(() => {
    return () =>
      props.setInfo({ institution: '', degree: '', start: '', end: '' })
  }, [])

  return (
    <Container>
      <Label>*Institution</Label>
      <Input
        placeholder="Your Institution"
        type="text"
        maxLength="30"
        value={props.info.institution}
        onChange={({ target }) =>
          props.setInfo({ ...props.info, institution: target.value })
        }
        required
      />

      <Label>*Degree</Label>
      <Input
        placeholder="Your Degree"
        type="text"
        maxLength="30"
        value={props.info.degree}
        onChange={({ target }) =>
          props.setInfo({ ...props.info, degree: target.value })
        }
        required
      />
      <Label>*Start date</Label>
      <Input
        type="date"
        value={props.info.start}
        onChange={({ target }) =>
          props.setInfo({ ...props.info, start: target.value })
        }
        required
      />

      <Label>*End date</Label>
      <Input
        type="date"
        value={props.info.end}
        onChange={({ target }) =>
          props.setInfo({ ...props.info, end: target.value })
        }
        required
      />
    </Container>
  )
}
