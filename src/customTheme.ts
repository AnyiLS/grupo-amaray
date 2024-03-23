import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
    carousel: {
        indicators: {
            active: {
                on: 'bg-[#D6D6D6] max-767:w-[48px] max-767:h-[10px] w-[107px] h-[16px] max-1024:w-[50px] max-1024:h-[8px]',
                off: 'bg-[#EEEBEB] max-767:w-[48px] max-767:h-[10px] w-[107px] h-[16px] max-1024:w-[50px] max-1024:h-[8px]'
            },
            wrapper: "absolute bottom-[2%] flex space-x-3 w-full justify-center"
        },
        control: {
            base: 'hidden',
            icon: 'hidden'
        }
    }
}

export default customTheme
