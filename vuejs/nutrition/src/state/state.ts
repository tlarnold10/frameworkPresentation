import { createMachine, interpret, assign } from 'xstate';
import { useActor } from '@xstate/vue'

// This machine is completely decoupled from Vue
export const toggleMachine = createMachine({
  id: 'toggle',
  context: {
    dailyTracker: [],
    totalCalories: 0,
    totalCarbs: 0,
    totalProtein: 0,
    totalFat: 0
  },
  initial: 'inactive',
  states: {
    inactive: {
      on: { ADD: {
        target: 'inactive',
        actions: ['updateTracker']
        },
        REMOVE: {
          target: 'inactive',
          actions: ['updateTracker']
        }
      }
    }
  }
},
{
  actions: {
    updateTracker: (context, event) => {
      if (event.type == 'ADD') {
        context.dailyTracker.push(event.payload);
      }
      else {
        context.dailyTracker = context.dailyTracker.filter((x) => x !== event.payload);
      }
      context.totalCalories = 0;
      context.totalCarbs = 0;
      context.totalProtein = 0;
      context.totalFat = 0;
      for (var item of context.dailyTracker) {
        context.totalCalories = context.totalCalories + item.calories;
        context.totalCarbs = context.totalCarbs + Number(item.carbs.substring(0, item.carbs.length - 1));
        context.totalProtein = context.totalProtein + Number(item.protein.substring(0, item.protein.length - 1));
        context.totalFat = context.totalFat + Number(item.fat.substring(0, item.fat.length - 1));
      }
    }//,
    // removeFromDailyTracker: (context, event) => {
    //   context.dailyTracker = context.dailyTracker.filter((x) => x !== event.payload);
    //   context.totalCalories = 0;
    //   context.totalCarbs = 0;
    //   context.totalProtein = 0;
    //   context.totalFat = 0;
    //   for (var item of context.dailyTracker) {
    //     context.totalCalories = context.totalCalories + item.calories;
    //     context.totalCarbs = context.totalCarbs + Number(item.carbs.substring(0, item.carbs.length - 1));
    //     context.totalProtein = context.totalProtein + Number(item.protein.substring(0, item.protein.length - 1));
    //     context.totalFat = context.totalFat + Number(item.fat.substring(0, item.fat.length - 1));
    //   }
    // }
  }
});

const service = interpret(toggleMachine).start();

export const useToggleMachine = () => {
  return useActor(service);
};