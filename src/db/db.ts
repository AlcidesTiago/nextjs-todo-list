model Todo{
    id string @id @default (uuid())
    title string
    complete boolean
    createAt DataTime @default (now())
    create DataTime @updateAt
}
