import * as z from 'zod'


export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Enter a valid email'
    }),
    password: z.string().min(1, {
        message: 'Password is required'
    }),
    code: z.optional(z.string())
})

export const SignupSchema = z.object({
    email: z.string().email({
        message: 'Enter a valid email'
    }),
    password: z.string().min(8, {
        message: 'Minimum 8 characters is required'
    }),
    name: z.string().min(1, {
        message: 'Name is required'
    })
})

// export const ResetSchema = z.object({
//     email: z.string().email({
//         message: 'Enter a valid email'
//     }),
// })

// export const PasswordResetSchema = z.object({
//     password: z.string().min(8, {
//         message: 'Minimum 8 characters is required'
//     }),
// })


// export const SettingsFormSchema = z.object({
//     name: z.optional(z.string().min(1)),
//     isTwoFactorEnabled: z.optional(z.boolean()),
//     role: z.enum([UserRole.TUTOR, UserRole.LEARNER, UserRole.ADMIN]),
//     email: z.optional(z.string().email()),
//     password: z.optional(z.string().min(6)),
//     newPassword: z.optional(z.string().min(6)),
// }).refine((data) => {
//     if (data.password && !data.newPassword) return false
//     return true
// }, {
//     message: 'New Password is required!',
//     path: ['newPassword']
// }).refine((data) => {
//     if (data.newPassword && !data.password) return false
//     return true
// }, {
//     message: 'Password is required!',
//     path: ['password']
// })


// export const AddSubjectSchema = z.object({
//     title: z.string().min(3, {
//         message: 'Title must be minimum 3 characters.'
//     }).max(100, {
//         message: 'Title must be maximum 100 characters.'
//     }),
//     description: z.string().min(10, {
//         message: 'Description is must be minimum 10 characters.'
//     }).max(300, {
//         message: 'Description must be maximum 300 characters.'
//     }),
// })

// export const SearchSubjectSchema = z.object({
//     title: z.string().min(3, {
//         message: 'Enter 3 or more characters to search subject!'
//     })
// })


// export const SubjectTableSchema = z.object({
//     id: z.string(),
//     title: z.string(),
//     description: z.string(),
//     courseCount: z.number(),
//     learnerCount: z.number(),
//     favoriteCount: z.number(),
//     createdOn: z.date(),
// })


// export const CourseSchema = z.object({
//     title: z.string().min(3, {message: 'Title must be 3 or more charcters.'}),
//     description: z.optional(z.string().min(30, {message: 'Title must be 30 or more charcters.'})),
//     price: z.optional(z.number().min(1, {
//         message: 'Enter a value greater than 0.'
//     })),
//     subject: z.optional(z.string()),
//     thumbnailUrl: z.optional(z.string()),
//     startDate: z.optional(z.date().refine((startDate) => {
//         const currentDate = new Date()
//         currentDate.setHours(0, 0, 0, 0)
//         const minDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000) 
//         return startDate >= minDate
//     }, {
//         message: "State date must be atleast one day from the current date."
//     })),
//     endDate: z.optional(z.date().refine((endDate, context) => {
//         const startDate = context.previous.startDate
//         if(!startDate) return true
//         const sixMonthsFromStartDate = new Date()
//         sixMonthsFromStartDate.setMonth(sixMonthsFromStartDate.getMonth() + 6)
//         return endDate >= startDate && endDate <= sixMonthsFromStartDate
//     }, {
//         message: "End date must be on or after the start date and not more than 6 months after the start date."
//     })),
// })