import {generateClasses} from '@formkit/themes'

const config = {
    config: {
        classes: generateClasses({
            global: {
                wrapper: 'space-y-4 mb-3',
                message: 'text-red-500 text-sm font-bold uppercase',
                label: 'block mb-1 font-bold text-lg text-gray-700',
                input: 'w-full p-3 border border-gray-33 rounded-lg text-gray-700 placeholder-gray-400'
            },

            submit: {
                input: '$reset bg-blue-500 px-10 py-3 text-center rounded-lg uppercase text-white font-bold hover:bg-blue-600 trasnsition-colors'
            }
        })
    }
}


export default config