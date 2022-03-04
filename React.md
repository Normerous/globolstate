### useMemo และ useCallback ของ React Hooks

หลักการของ useMemo คือการ Cache ข้อมูลไว้

  const getNumberWithMemo = useMemo(() => {
    return getTimestamp()
  }, [someValue])

    const getNumber = useCallback(() => {
    setNumberWithCallback(() => getTimestamp())
  }, [someValue])
  
ถูกเรียกครั้งแรกเมื่อมีการ Render
ถูกเรียกอีกครั้งเมื่อมีการ Re-Render และ ค่าใน Array deps มีการเปลี่ยนแปลง
Return ออกเป็นค่า Value
หลักการของ useCallback คือการ Cache ฟังก์ชันไว้

ไม่ ถูกเรียกเมื่อมีการ Render (จะถูกเรียกเมื่อเราสั่ง Call ฟังก์ชันเอง)
ถูกเรียกอีกครั้งเมื่อสั่ง Call ฟังก์ชัน และ ค่าใน Array deps มีการเปลี่ยนแปลง
Return ออกเป็น Function
ทั้งสองตัวมีการทำงานที่คล้ายกัน และแตกต่างกันนิดหน่อย แต่ทั้งสองสามารถช่วยเพิ่มประสิทธิภาพเพื่อช่วยลดการ Re-Render ในบางกรณีที่เกินความจำเป็นได้ และต้องเลือกใช้ตามความเหมาะสมดังนี้

เมื่อ Client ใช้ Device สเปคเครื่องไม่ค่อยแรง React อาจจะหน่วงและช้ามาก ๆ ซึ่งการ Optimize render ก็อาจจะช่วยไปได้เยอะมาก ๆ
useMemo ใช้เมื่อถ้ามีการคำนวณอะไรที่ใช้เวลานานมาก ๆ และต้องการทำ Memorizes ไว้ แต่ในการกลับกัน ไม่ควรใช้กับการคำนวณง่าย ๆ เช่น 1 + 1 เพราะเป็นปกติจะได้ผลลัพธ์เร็วอยู่แล้ว และอาจจะทำให้เกิด Overhead เปล่า ๆ
เมื่อมี Component ซับซ้อนและเยอะ และมี Logic เยอะ ที่เป็น Parent Child หลายชั้น ถ้าไม่มีการทำ Optimize render อาจจะช้าและค้างได้เลย
Input Form ที่มีฟิลด์เยอะ ๆ ถ้าไม่คำนึงเรื่องพวกนี้ ถ้าเวลาพิมพ์ เร็ว ๆ จะสะดุดมาก ๆ

## createRef and forwardRef
ใช้ useRef

ใช้กับ Functional component
สามารถกำหนด initialValue (.current) ได้
เพื่อรักษาค่า Ref ปัจจุบันใช้อยู่ตลอดการใช้งานของ Functional component และเมื่อมีการ Re-Render จะไม่สร้างค่า Ref ขึ้นมาใหม่
ความสามารถในการทำ Memorize
อัปเดตค่า .current ได้ (แต่ต้องสั่ง Trigger อะไรบางอย่างให้ Re-Render จากนั้นค่าที่กำหนดถึงจะเปลี่ยนแปลง)
ใช้ createRef

ใช้กับ Class component
เมื่อต้องการรีเช็ต Ref ใหม่ทุกครั้งที่มีการ Re-Render
ใช้ forwardRef เมื่อต้องการส่งต่อ Ref จาก Parent ไปที่ Child เมื่อสร้างเป็น Ref เป็น Compone