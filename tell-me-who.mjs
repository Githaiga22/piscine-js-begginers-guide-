import fs from 'fs/promises'

const inputPath = process.argv[2]

fs.readdir(inputPath)
  .then((files) => {
    const names = files.map((file) => {
      const [firstName, lastNameWithExtension] = file.split('_')
      const lastName = lastNameWithExtension.replace('.json', '')
      return { firstName, lastName }
    })

    names.sort(
      (a, b) =>
        a.lastName.localeCompare(b.lastName) ||
        a.firstName.localeCompare(b.firstName),
    )

    names.forEach((name, index) => {
      console.log(`${index + 1}. ${name.lastName} ${name.firstName}`)
    })
  })
  .catch((err) => console.error(err))