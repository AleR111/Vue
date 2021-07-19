import {mount} from "@vue/test-utils"
import Calculator from "../components/Calculator";

describe('Calculator test', () => {
    it('test input of operand1', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('123')

        expect(wrapper.vm.operand1).toBe(123)
    })
})
