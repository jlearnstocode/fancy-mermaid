/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Swagger API
 * This is a swagger for API.
 * OpenAPI spec version: 1.0
 */
import { rest } from 'msw'
import { faker } from '@faker-js/faker'

export const getGetMeMock = () => ({
  data: {
    avatar: 'https://avatars.githubusercontent.com/u/10388449?s=200&v=4',
    department: 'Dev',
    email: 'demo@dwarves.foundation',
    fullName: 'Dwarvesf Demo',
    id: 2,
    role: 'user',
    status: 'active',
    title: 'Demo',
  },
})

export const getGetUsersListMock = () => ({
  data: Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    avatar: (() => faker.image.avatar())(),
    department: (() => faker.person.jobArea())(),
    email: (() => faker.internet.email())(),
    fullName: (() => faker.person.fullName())(),
    id: faker.datatype.number({ min: undefined, max: undefined }),
    role: (() => faker.helpers.arrayElement(['User', 'Admin', 'Moderator']))(),
    status: (() => faker.helpers.arrayElement(['Active', 'Inactive']))(),
    title: (() => faker.person.jobTitle())(),
  })),
  metadata: {
    hasNext: faker.datatype.boolean(),
    page: (() => faker.number.int({ min: 1, max: 10 }))(),
    pageSize: (() => faker.number.int({ min: 1, max: 20 }))(),
    sort: faker.random.word(),
    totalPages: (() => faker.number.int({ min: 1, max: 10 }))(),
    totalRecords: (() => faker.number.int({ min: 1, max: 100 }))(),
  },
})

export const getUpdateUserMock = () => ({
  data: {
    avatar: (() => faker.image.avatar())(),
    department: (() => faker.person.jobArea())(),
    email: (() => faker.internet.email())(),
    fullName: (() => faker.person.fullName())(),
    id: faker.datatype.number({ min: undefined, max: undefined }),
    role: (() => faker.helpers.arrayElement(['User', 'Admin', 'Moderator']))(),
    status: (() => faker.helpers.arrayElement(['Active', 'Inactive']))(),
    title: (() => faker.person.jobTitle())(),
  },
})

export const getUpdatePasswordMock = () => ({
  data: { message: faker.random.word() },
})

export const getUserMSW = () => [
  rest.get('*/portal/me', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetMeMock()),
    )
  }),
  rest.get('*/portal/users', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetUsersListMock()),
    )
  }),
  rest.put('*/portal/users', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getUpdateUserMock()),
    )
  }),
  rest.put('*/portal/users/password', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getUpdatePasswordMock()),
    )
  }),
]
