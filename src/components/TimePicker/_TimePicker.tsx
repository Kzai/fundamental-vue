// import { Component, Base, Prop } from '@/core';
// import { Popover } from '../Popover';
// import { InputGroup, Input } from '../Form';
// import { Button } from '../Button';
// import { TimeItem } from './TimeItem';

// interface Props {
//   value?: string | null;
//   placeholder?: string;
//   ariaLabel?: string | null;
//   showMeridian?: boolean;
//   compact?: boolean;
// }

// @Component('TimePicker')

// export class TimePicker extends Base<Props> {
//   @Prop('ID of the TimePicker', {
//     type: String,
//   })
//   id!: string | null;

//   @Prop('Placeholder of the TimePicker', {
//     type: String,
//   })
//   placeholder!: string;

//   @Prop('Value of Time to be set in the time Item. This has to be in the format "hh:mm:ss" / "hh:mm" for the 24 hour clock or "hh:mm:ss a" / "hh:mm a" for the 12 hour clock', {
//     type: String,
//     // validator needs to be added.
//   })
//   value!: string | null;

//   @Prop('aria-label for the TimePicker', {
//     type: String,
//     default: 'Time Picker',
//   })
//   ariaLabel!: string | null;

//   @Prop('whether TimePicker is compact', { type: Boolean, default: false })
//   compact!: boolean;

//   @Prop('If Meridian should be shown', {
//     type: Boolean,
//     default: false,
//   })
//   showMeridian!: boolean;

//   $tsxProps!: Readonly<{}> & Readonly<Props>;
//   private timeValue: string | null = this.value;

//   private updateTimeItem(time: string) {
//     this.timeValue = time;
//     this.$emit('timePickerUpdate', this.timeValue);
//   }

//   render() {
//     return (
//       <div class='fd-time-picker'>
//         <Popover noArrow={true} popoverVisible={false}>
//           <div class='fd-popover__control' slot='control'>
//             <InputGroup compact={this.compact} afterClass={'fd-input-group__addon--button fd-input-group--after'}>
//               <Input value={this.timeValue} compact={this.compact} placeholder={this.placeholder}></Input>
//               <Button styling='light' slot='after' icon='fob-watch'></Button>
//             </InputGroup>
//           </div>
//           <TimeItem value={this.timeValue} showMeridian={this.showMeridian} on-timeItemUpdate={this.updateTimeItem}></TimeItem>
//         </Popover>
//       </div>
//     );
//   }
// }
