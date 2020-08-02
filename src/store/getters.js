export default {
    usersCount: (state) => {
        let users = [...state.teachers, ...state.students];
        return users.length;
    },
    tehranTeachers: (state) => {
        const data = state.teachers.filter((teacher) => {
            return teacher.city === 'Tehran'
        })
        return data
    },
    tehranStudents: (state) => {
        const data = state.students.filter((student) => {
            return student.city === 'Tehran'
        })
        return data
    }
}