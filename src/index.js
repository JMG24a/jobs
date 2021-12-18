import Job from './models/Job'

const jose = new Job(
    'jose',
    'morales',
    21,
    'masculino'
)


jose.getName()
jose.setName('Angel')
jose.getName()