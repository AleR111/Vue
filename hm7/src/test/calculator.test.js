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
    it('sum operation', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const sumBtn = wrapper.find('button[name="+"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    })

    it('subtraction operation', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('2')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const sumBtn = wrapper.find('button[name="-"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })

    it('multiplication operation', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('2')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const sumBtn = wrapper.find('button[name="*"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(4)
    })

    it('division operation', async () => {
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

describe('keyword test', () => {
    it('1 button', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[id=one]')
        operand1.setChecked()

        const btn = wrapper.find('button[name="1"]')
        btn.trigger('click')

        expect(wrapper.vm.operand1).toBe(1)
    })
    it('1 button', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[id=two]')
        operand2.setChecked()

        const btn = wrapper.find('button[name="1"]')
        btn.trigger('click')

        expect(wrapper.vm.operand2).toBe(1)
    })

    it('2 button', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[id=one]')
        operand1.setChecked()

        const btn = wrapper.find('button[name="2"]')
        btn.trigger('click')

        expect(wrapper.vm.operand1).toBe(2)
    })
    it('2 button', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[id=two]')
        operand2.setChecked()

        const btn = wrapper.find('button[name="2"]')
        btn.trigger('click')

        expect(wrapper.vm.operand2).toBe(2)
    })

    it('3 button', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[id=one]')
        operand1.setChecked()

        const btn = wrapper.find('button[name="3"]')
        btn.trigger('click')

        expect(wrapper.vm.operand1).toBe(3)
    })
    it('3 button', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[id=two]')
        operand2.setChecked()

        const btn = wrapper.find('button[name="3"]')
        btn.trigger('click')

        expect(wrapper.vm.operand2).toBe(3)
    })

    it('4 button', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[id=one]')
        operand1.setChecked()

        const btn = wrapper.find('button[name="4"]')
        btn.trigger('click')

        expect(wrapper.vm.operand1).toBe(4)
    })
    it('4 button', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[id=two]')
        operand2.setChecked()

        const btn = wrapper.find('button[name="4"]')
        btn.trigger('click')

        expect(wrapper.vm.operand2).toBe(4)
    })

    it('5 button', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[id=one]')
        operand1.setChecked()

        const btn = wrapper.find('button[name="5"]')
        btn.trigger('click')

        expect(wrapper.vm.operand1).toBe(5)
    })
    it('5 button', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[id=two]')
        operand2.setChecked()

        const btn = wrapper.find('button[name="5"]')
        btn.trigger('click')

        expect(wrapper.vm.operand2).toBe(5)
    })

    it('6 button', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[id=one]')
        operand1.setChecked()

        const btn = wrapper.find('button[name="6"]')
        btn.trigger('click')

        expect(wrapper.vm.operand1).toBe(6)
    })
    it('6 button', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[id=two]')
        operand2.setChecked()

        const btn = wrapper.find('button[name="6"]')
        btn.trigger('click')

        expect(wrapper.vm.operand2).toBe(6)
    })

    it('7 button', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[id=one]')
        operand1.setChecked()

        const btn = wrapper.find('button[name="7"]')
        btn.trigger('click')

        expect(wrapper.vm.operand1).toBe(7)
    })
    it('7 button', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[id=two]')
        operand2.setChecked()

        const btn = wrapper.find('button[name="7"]')
        btn.trigger('click')

        expect(wrapper.vm.operand2).toBe(7)
    })

    it('8 button', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[id=one]')
        operand1.setChecked()

        const btn = wrapper.find('button[name="8"]')
        btn.trigger('click')

        expect(wrapper.vm.operand1).toBe(8)
    })
    it('8 button', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[id=two]')
        operand2.setChecked()

        const btn = wrapper.find('button[name="8"]')
        btn.trigger('click')

        expect(wrapper.vm.operand2).toBe(8)
    })

    it('9 button', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[id=one]')
        operand1.setChecked()

        const btn = wrapper.find('button[name="9"]')
        btn.trigger('click')

        expect(wrapper.vm.operand1).toBe(9)
    })
    it('9 button', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[id=two]')
        operand2.setChecked()

        const btn = wrapper.find('button[name="9"]')
        btn.trigger('click')

        expect(wrapper.vm.operand2).toBe(9)
    })

    it('0 button', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[id=one]')
        operand1.setChecked()

        const btn = wrapper.find('button[name="0"]')
        btn.trigger('click')

        expect(wrapper.vm.operand1).toBe(0)
    })
    it('0 button', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[id=two]')
        operand2.setChecked()

        const btn = wrapper.find('button[name="0"]')
        btn.trigger('click')

        expect(wrapper.vm.operand2).toBe(0)
    })

    it('backspace button', async () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[id=one]')
        operand1.setChecked()

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('123')

        const btn = wrapper.find('button[name="←"]')
        btn.trigger('click')

        expect(wrapper.vm.operand1).toBe(12)
    })

    it('backspace button', async () => {
        const wrapper = mount(Calculator)

        const operand2 = wrapper.find('input[id=two]')
        operand2.setChecked()

        const operand1Input = wrapper.find('input[name=operand2]')
        operand1Input.setValue('123')

        const btn = wrapper.find('button[name="←"]')
        btn.trigger('click')

        expect(wrapper.vm.operand2).toBe(12)
    })
})