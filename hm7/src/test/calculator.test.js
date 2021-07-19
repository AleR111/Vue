import {mount} from "@vue/test-utils"
import Calculator from "../components/Calculator";

describe('Calculator test input', () => {
    it('test input of operand1', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('123')

        expect(wrapper.vm.operand1).toBe(123)
    })

    it('test input of operand2', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('123')

        expect(wrapper.vm.operand2).toBe(123)
    })
})

describe('Calculate test operation', () => {
    it('sum operation', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const sumBtn = wrapper.find('button[name="+"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    })

    it('subtraction operation', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('2')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const sumBtn = wrapper.find('button[name="-"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })

    it('multiplication operation', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('2')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const sumBtn = wrapper.find('button[name="*"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(4)
    })

    it('division operation', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('2')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const sumBtn = wrapper.find('button[name="/"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })
})
