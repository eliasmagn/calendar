<script>
    import {getContext} from 'svelte';
    import Header from './Header.svelte';
    import Body from './Body.svelte';
    import Week from './Week.svelte';
    import Day from './Day.svelte';

    let {_viewDates, _hiddenEvents, dayMaxEvents, hiddenDays, theme} = getContext('state');

    let weeks;
    let days;

    $: {
        weeks = [];
        days = $_viewDates.length - $hiddenDays.length;
        $_hiddenEvents = {};
        $dayMaxEvents;
        for (let i = 0; i < $_viewDates.length / days; ++i) {
            let dates = [];
            for (let j = 0; j < days; ++j) {
                dates.push($_viewDates[i * days + j]);
            }
            console.log('dates:', dates);

        }
        weeks.push(dates);

    console.log('days:', days);
    console.log('week:', $_viewDates);
    }

</script>
<Header/>
<Body>
<div class="{$theme.days}" role="row">
{#each weeks as dates}
    <Week {dates}/>
{/each}
</div>
</Body>



